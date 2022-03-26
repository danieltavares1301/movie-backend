import prisma from '@prisma/client';
import Joi from 'joi';
import Controller from './Controller.js';

const { Room } = prisma;

const schema = Joi.object({
  sessionDate: Joi.date().required(),
  room: Joi.string()
    .required()
    .valid(...Object.values(Room)),
  caption: Joi.boolean().required(),
  // lógica para conseguir passar um id de um movie
  movie: Joi.object({
    connect: Joi.object({
      id: Joi.string().required(),
    }),
  }),
});

class SessionController extends Controller {
  constructor() {
    super('session', schema);
  }
  store(request, response) {
    // faz novo movieId
    const movieId = request.body.movieId;

    // apaga movieId do body
    delete request.body.movieId;

    // transforma novo movieId no movieId que será utilizado
    request.body.movie = {
      connect: {
        id: movieId,
      },
    };
    super.store(request, response);
  }
}
export default SessionController;
