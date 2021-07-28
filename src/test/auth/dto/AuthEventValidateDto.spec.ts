import { AuthEventValidateDto } from "../../../auth/dto/AuthEventValidateDto";


test('Evento test AuthEventValidateDto', () => {
    const event = new AuthEventValidateDto({
        user: 'test',
        Authorization:'test1'
    });

    expect(event).toEqual({
        user: 'test',
        Authorization:'test1'
    })
})