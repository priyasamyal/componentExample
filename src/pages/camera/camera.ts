import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastProvider } from '../../providers/toast/toast';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  image: string;
  imageSrc: string;
  src: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public camera: Camera,
    public toastprovider: ToastProvider,
    private socialSharing: SocialSharing,

  ) {

  }
  actionSheetFunc() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Photo option',

      buttons: [
        {
          text: 'Take a Photo',

          icon: 'camera',
          handler: () => {
            this.onTakePicture();
          },
        },
        {
          text: 'Chosse From Gallery ',
          icon: 'images',
          handler: () => {
            this.openGallery();
          },
        },
      ],
    });
    actionSheet.present();
  }
  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true,

      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.image = 'data:image/jpeg;base64,' + imageData;
      },
      err => {
        this.toastprovider.toast(
          'Error while trying to capture picture',
          3000,
          'bottom'
        );
      }
    );
  }
  shareFunc() {
    this.socialSharing
      .share('yayayayyyayayayy', 'Share subject')
      .then(() => {
        console.log('shareSheetShare: Success');
      })
      .catch(() => {
        console.error('shareSheetShare: failed');
      });
  }
  openGallery() {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    };

    this.camera
      .getPicture(cameraOptions)
      .then(file_uri => (this.image = file_uri), err => console.log(err));

    console.log('aaaaaaaa');
  }
}
