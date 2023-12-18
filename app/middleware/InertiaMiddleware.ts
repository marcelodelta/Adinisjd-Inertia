// app/Middleware/InertiaMiddleware.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import InertiaServer from '@inertiajs/server';

export default class InertiaMiddleware {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    ctx.inertia = { render: (component: string, props: object = {}) => {
      const page = {
        component: component,
        props: props,
        url: ctx.request.url(),
        version: null
      };
      return new Promise<void>((resolve) => {
        ctx.response.header('X-Inertia', 'true');
        ctx.response.json(page);
        resolve();
      });
    }};

    // Continue com a próxima middleware na pilha
    await next();
  }
}