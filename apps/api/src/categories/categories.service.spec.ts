import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

const mockCategory = { id: 1, name: 'Test Category', price: 100 };
const mockCategoryArray = [mockCategory];

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repo: Repository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: {
            create: jest.fn().mockReturnValue(mockCategory),
            save: jest.fn().mockResolvedValue(mockCategory),
            find: jest.fn().mockResolvedValue(mockCategoryArray),
            findOneBy: jest.fn().mockResolvedValue(mockCategory),
            update: jest.fn().mockResolvedValue({ affected: 1 }),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    repo = module.get<Repository<Category>>(getRepositoryToken(Category));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a category', async () => {
    const dto: CreateCategoryDto = { name: 'Test Category', price: 100 } as any;
    const result = await service.create(dto);
    expect(repo.create).toHaveBeenCalledWith(dto);
    expect(repo.save).toHaveBeenCalledWith(mockCategory);
    expect(result).toEqual(mockCategory);
  });

  it('should return all categories', async () => {
    const result = await service.findAll();
    expect(repo.find).toHaveBeenCalled();
    expect(result).toEqual(mockCategoryArray);
  });

  it('should return one category by id', async () => {
    const result = await service.findOne(1);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
    expect(result).toEqual(mockCategory);
  });

  it('should update a category', async () => {
    const dto: UpdateCategoryDto = { name: 'Updated' } as any;
    const result = await service.update(1, dto);
    expect(repo.update).toHaveBeenCalledWith(1, dto);
    expect(result).toEqual({ affected: 1 });
  });

  it('should remove a category', async () => {
    const result = await service.remove(1);
    expect(repo.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual({ affected: 1 });
  });
});
