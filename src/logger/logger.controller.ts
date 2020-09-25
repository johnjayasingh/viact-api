import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { formatToTimeZone } from 'date-fns-timezone';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoggerService } from './logger.service';

function secondsToDhms(seconds: number) {
  seconds = Number(seconds) / 1000;
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

@Controller('api/logger')
export class LoggerController {
  constructor(private service: LoggerService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Request() request,
    @Query('from') from,
    @Query('to') to,
    @Query('type') type,
    @Query('timezone') timeZone = 'Asia/Hong_Kong',
  ) {
    const filter: any = {};
    // Not a Super Admin and in Production the request can only see logs from their company
    if (request.user.isSuperAdmin) {
      if (process.env.APP_ENV === 'production') {
        filter.companyCode = request.user.company_code;
      }
    } else {
      filter.companyCode = request.user.company_code;
    }
    if (from && to) {
      filter.timestamp = { $gte: from, $lte: to };
    }
    if (type) {
      filter.type = type;
    }
    const rows = (await this.service.getAll(filter))?.map((row) => ({
      ...row.toJSON(),
      engine: row.engine.length > 0 ? row.engine.join(' ,') : '-',
      date: formatToTimeZone(new Date(row?.timestamp), 'DD/MM/YYYY', {
        timeZone,
      }),
      time: formatToTimeZone(new Date(row?.timestamp), 'HH:mm:ss', {
        timeZone,
      }),
      upTime: formatToTimeZone(new Date(row?.upTime), 'HH:mm:ss', {
        timeZone,
      }),
      downTime: formatToTimeZone(new Date(row?.downTime), 'HH:mm:ss', {
        timeZone,
      }),
    }));

    let columns = [];
    switch (type) {
      case 'zone_editing':
        columns = [
          {
            title: 'Date',
            field: 'date',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Login ID',
            field: 'loginId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Camera ID',
            field: 'cameraId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Engine',
            field: 'engine',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Updated Time',
            field: 'time',
            cellStyle: {
              textAlign: 'center',
            },
          },
        ];
        break;

      case 'status_editing':
        columns = [
          {
            title: 'Date',
            field: 'date',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Alert ID',
            field: 'alertId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Login ID',
            field: 'loginId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'From',
            field: 'from',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'To',
            field: 'to',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Duration',
            field: 'duration',
            cellStyle: {
              textAlign: 'center',
            },
          },
        ];
        break;

      case 'comment_editing':
        columns = [
          {
            title: 'Date',
            field: 'date',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Updated Time',
            field: 'time',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Alert ID',
            field: 'alertId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Login ID',
            field: 'loginId',
            cellStyle: {
              textAlign: 'center',
            },
          },

          {
            title: 'Comment',
            field: 'comment',
            cellStyle: {
              textAlign: 'center',
            },
          },
        ];
        break;
      case 'failures':
        columns = [
          {
            title: 'Date',
            field: 'date',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Seq. No',
            field: 'alertId',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Type Of Error',
            field: 'errorType',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Down Time',
            field: 'downTime',
            cellStyle: {
              textAlign: 'center',
            },
          },
          {
            title: 'Up Time',
            field: 'upTime',
            cellStyle: {
              textAlign: 'center',
            },
          },
        ];
        break;
      default:
        break;
    }

    return {
      rows,
      columns,
    };
  }

  @Post('/service')
  async createFailurelogs(@Body() body) {
    const payload = {
      type: 'failures',
      loginId: 'system',
      companyCode: 'viact',
      upTime: new Date(body.upTime).getTime(),
      downTime: new Date(body.downTime).getTime(),
      errorType: body.errorType,
    };
    return this.service.create(payload);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body, @Request() request) {
    if (body.type === 'status_editing') {
      const lastLog = await this.service.getLatest({
        companyCode: request.user.company_code,
        detectionId: body.detectionId,
        type: body.type,
      });
      body.duration = 0;
      if (lastLog) body.duration = Date.now() - lastLog?.timestamp;
    }
    body.timestamp = new Date().getTime();
    body.companyCode = request.user.company_code;
    body.loginId = request.user.username;
    return this.service.create(body);
  }
}
