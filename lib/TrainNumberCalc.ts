/**
 * 列車番号から列車種別を計算するクラス
 */
class TrainNumberCalc {
  /**
   * 計算する列車番号
   */
  protected trainNumber: string;

  /**
   * 列車番号を1文字ずつに分割した値
   * 4ケタより少ない場合、頭を0で埋める
   *
   * 9011の場合 => [9, 0, 1, 1]
   * 94の場合 => [0, 0, 9, 4]
   */
  protected splitNumber: number[];

  /**
   * TrainNumberCalcクラスのコンストラクタ
   *
   * @param trainNumber 計算する列車番号
   */
  constructor (trainNumber: string) {
    this.trainNumber = trainNumber;
    this.setSplitNumber();
  }

  /**
   * 旅客列車かの判別
   *
   * 列車番号の十位が4以下(下2ケタが00~49)の場合は旅客列車
   */
  isPassengerNumber (): boolean {
    return this.splitNumber[2] <= 4;
  }

  /**
   * 旅客列車かの判別
   *
   * 列車番号の十位が5以上(下2ケタが50~99)の場合は旅客列車
   */
  isFreightNumber (): boolean {
    return this.splitNumber[2] >= 5;
  }

  /**
   * 旅客列車の臨時列車かの判別
   *
   * 列車番号の千位が6以上の場合は臨時列車
   */
  isPassengerSpecial (): boolean {
    return this.splitNumber[0] >= 6;
  }

  /**
   * 貨物列車の臨時列車かの判別
   *
   * 列車番号の千位が8以上の場合は臨時列車
   */
  isFreightSpecial (): boolean {
    return this.splitNumber[0] >= 8;
  }

  /**
   * 列車番号を1文字ずつに分割したsplitNumberを設定
   */
  private setSplitNumber (): void {
    this.splitNumber = this.trainNumber.toString().padStart(4, '0').split('').map(s => parseInt(s));
  }
}

export default TrainNumberCalc;
