import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    console.log(id); // This will print the id in the terminal for debugging.
    return ARTICLES.find((article) => article.id === id);
  }
}

