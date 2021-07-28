import { DataBaseEventDto } from "../../../database/dto/DataBaseEventDto";
import { dataBaseRepository } from "../../../database/repository/dataBaseRepository";
import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from "@nestjs/typeorm";

describe('Test Repository', () => {
    let service: dataBaseRepository;
    let repository: Repository<DataBaseEventDto>;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                dataBaseRepository,
                {
                    provide: getRepositoryToken(DataBaseEventDto),
                    useValue: {
                        save: jest.fn(),
                        createQueryBuilder: jest.fn(),
                        delete: jest.fn(),
                        where: jest.fn(),
                        execute: jest.fn()
                    }
                }
            ]
        }).compile();

        service = module.get<dataBaseRepository>(dataBaseRepository);
        repository = module.get<Repository<DataBaseEventDto>>(
            getRepositoryToken(DataBaseEventDto)
        );
    });

    describe('SaveEvent', () => {
        it('', async () => {
            const reposSpy = jest.spyOn(repository, 'save')
                .mockResolvedValue({ name: "TestSebastian" } as DataBaseEventDto);
            expect(service.save(new DataBaseEventDto({ name: "TestSebastian" }))
            ).resolves.toEqual({ name: "TestSebastian" })
            expect(reposSpy).toBeCalledWith({ name: "TestSebastian" })
        })
    })

});