import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips out properties that are not in the DTO
      forbidNonWhitelisted: true, // throw error if extra props are sent
      transform: true, // <<-- this is the key: auto-transform to DTO class
      transformOptions: {
        enableImplicitConversion: true, // optional: allow type conversion
      },
    }),
  );

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API for my products')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
