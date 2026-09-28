import { Module } from '@nestjs/common';

import { ProductModule } from '../../product/product.module';
import { ServiceModule } from '../../service/service.module';
import { FaqModule } from '../../faq/faq.module';

import { AiToolService } from './ai-tool.service';

import { ProductSearchTool } from './product-search.tool';
import { ServiceSearchTool } from './service-search.tool';
import { FaqSearchTool } from './faq-search.tool';

@Module({
  imports: [
    ProductModule,
    ServiceModule,
    FaqModule,
  ],

  providers: [
    AiToolService,

    ProductSearchTool,

    ServiceSearchTool,

    FaqSearchTool,
  ],

  exports: [
    AiToolService,
  ],
})
export class AiToolModule {}