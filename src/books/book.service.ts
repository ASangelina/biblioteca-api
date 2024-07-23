import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // POST
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create({
      title: createBookDto.titulo,
      author: createBookDto.autor,
      publisher: createBookDto.editora,
    });
    return this.bookRepository.save(newBook);
  }
}
