import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WidgetsService } from './widgets.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Controller('widgets')
@UseGuards(JwtAuthGuard)
export class WidgetsController {
  constructor(
    private readonly widgetsService: WidgetsService,
  ) {}

  @Post()
  async create(
    @Req() req: any,
    @Body() dto: CreateWidgetDto,
  ) {
    return this.widgetsService.create(
      req.user.businessId,
      dto,
    );
  }

  @Get()
  async findAll(@Req() req: any) {
    return this.widgetsService.findAll(
      req.user.businessId,
    );
  }

  @Get(':widgetId')
  async findOne(
    @Req() req: any,
    @Param('widgetId') widgetId: string,
  ) {
    return this.widgetsService.findOne(
      req.user.businessId,
      widgetId,
    );
  }

  @Patch(':widgetId')
  async update(
    @Req() req: any,
    @Param('widgetId') widgetId: string,
    @Body() dto: UpdateWidgetDto,
  ) {
    return this.widgetsService.update(
      req.user.businessId,
      widgetId,
      dto,
    );
  }

  @Delete(':widgetId')
  async remove(
    @Req() req: any,
    @Param('widgetId') widgetId: string,
  ) {
    return this.widgetsService.remove(
      req.user.businessId,
      widgetId,
    );
  }
}