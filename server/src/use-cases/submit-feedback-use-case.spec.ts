import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback',() => {
    it('should be able to submit a feed', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,8867asdf89asd9fas7das',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toBeCalled();
        expect(sendMailSpy).toBeCalled();
    })
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,8867asdf89asd9fas7das',
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BG',
            comment: '',
            screenshot: 'data:image/png;base64,8867asdf89asd9fas7das',
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'nice',
            screenshot: '123.jpg',
        })).rejects.toThrow();
    })
})