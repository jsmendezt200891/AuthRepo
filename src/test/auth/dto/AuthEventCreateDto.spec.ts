import { AuthEventCreateDto } from "../../../auth/dto/AuthEventCreateDto";


test('Evento test AuthEventCreateDto', () => {
    const event = new AuthEventCreateDto({
        user: 'test',
        pass:'test1'
    });

    expect(event).toEqual({
        user: 'test',
        pass:'test1'
    })
})