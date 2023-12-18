/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TestesController from '#controllers/testes_controller'

//router.on('/').render('pages/home')

router.get('', [TestesController, 'index'])