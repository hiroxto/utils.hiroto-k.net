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
   * 列車番号を1文字ずつに分割したsplitNumberを設定
   */
  setSplitNumber (): void {
    this.splitNumber = this.trainNumber.toString().padStart(4, '0').split('').map(s => parseInt(s));
  }
}

export default TrainNumberCalc;
