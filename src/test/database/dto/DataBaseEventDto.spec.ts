import { DataBaseEventDto } from "../../../database/dto/DataBaseEventDto";

test('Evento inicializa contructor', () => {
    const event = new DataBaseEventDto({
        name: 'test'
    });

    expect(event).toEqual({
        name: 'test',
        id: undefined
    })
})