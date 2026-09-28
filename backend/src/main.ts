import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = configService.get<number>('PORT') ?? 4000;

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(port);

  console.log(`🚀 BizPilot API running on http://localhost:${port}`);
}

bootstrap();