import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAthenticaded } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAthenticaded, new CreateMessageController().handle);
router.get('/messages/last3', new GetLast3MessagesController().handle);
router.get('/profile', ensureAthenticaded, new ProfileUserController().handle);

export { router };