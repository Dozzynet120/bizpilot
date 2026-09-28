import { Global, Module } from '@nestjs/common';
import { OpenAiProvider } from './openai.provider';

@Global()
@Module({
  providers: [
    OpenAiProvider,
  ],
  exports: [
    OpenAiProvider,
  ],
})
export class ProvidersModule {}