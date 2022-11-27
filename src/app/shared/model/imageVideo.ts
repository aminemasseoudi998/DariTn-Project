import {Mobilier} from "../../mobilier/model/mobilier";

export interface IImageVideo{
 id?: number;
 image?: string;
 mobilier?: Mobilier;
}

export class ImageVideo implements IImageVideo{

  constructor(
   public id?: number,
  public image?: string,
  public mobilier?: Mobilier
  ) {
  }
}
