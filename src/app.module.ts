import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [MongooseModule.forRoot(
    "mongodb+srv://bunyod:tIThg9CteDnizuLn@cluster0.jj72lp3.mongodb.net/?retryWrites=true&w=majority"), 
    BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// tIThg9CteDnizuLn