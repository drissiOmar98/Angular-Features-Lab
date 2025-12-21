import {ExampleModel} from '../../../shared/models/example.model';


export const RX_RESOURCE_EXAMPLES: ExampleModel[] = [
  {
    title: 'RxJS Counter with resource()',
    content:
      'Demonstrates integrating RxJS observables with Angular resource(). A reactive counter updates every second using interval(), effects, and proper subscription cleanup.',
    routerLink: './example4',
  },
  {
    title: 'rxResource Streaming with WebSocket (Crypto Prices)',
    content:
      'Real-time cryptocurrency price updates using rxResource() with the stream option and a WebSocket connection to CoinCap. Demonstrates abortable streams, signal-driven connections, and live UI updates.',
    routerLink: './example8',
  },

];
