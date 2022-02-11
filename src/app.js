import { LightningElement } from "lwc";

export default class App extends LightningElement {
  nome = 'Gabriel Ângelo';
  tel  = '(81) 9 8583-4618';
  cpf  = 'xxx.xxx.xxx-xx';
  ida  = '21';
  nome1 = 'Ângelo Gabriel';
  tel1  = '(xx) x xxxx-xxxx';
  cpf1  = '000.000.000-00';
  ida1  = '19';
  ema  = 'gabrielangelo.99888@gmail.com';
  inst = 'https://www.instagram.com/gabrielangelo.msa/';
  link = 'https://www.linkedin.com/in/gabriel-%C3%A2ngelo-6b5878220/';
  ema1  = 'gabriel@gmail.com';
  inst1 = 'https://www.instagram.com';
  link1 = 'https://www.linkedin.com/home';
  img1 = 'https://64.media.tumblr.com/5a52a66e1f2f6a54c95bf33372a4750e/0a8074926858a5d6-04/s540x810/6717fa7043821c3826d60bf56c310277af55d259.gifv';
  img2 = 'https://mangalivre.com.br/wp-content/uploads/buddypress/members/8504/cover-image/60f75ca08c513-bp-cover-image.gif';

  visible = true;

  trocarDiv(){
    this.visible = !this.visible;
  }

  g1 = true;

  alteraValores(){
    this.g1 = !this.g1;
  }
}