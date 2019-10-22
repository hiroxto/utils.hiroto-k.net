/**
 * 列車番号から列車種別を計算するクラス
 */
class TrainNumberCalc {
  /**
   * 計算する列車番号
   */
  protected trainNumber: string;

  protected splitNumber: number[];

  /**
   * TrainNumberCalcクラスのコンストラクタ
   *
   * @param trainNumber 計算する列車番号
   */
  constructor (trainNumber: string) {
    this.trainNumber = trainNumber;
  }

  /**
   * 列車番号を1文字ずつに分割したsplitNumberを設定
   */
  setSplitNumber (): void {
    this.splitNumber = this.trainNumber.toString().padStart(4, '0').split('').map(s => parseInt(s));
  }
}

export default TrainNumberCalc;
