/**
 * 列車番号から列車種別を計算するクラス
 */
class TrainNumberCalc {
  protected trainNumber: string;

  /**
   * TrainNumberCalcクラスのコンストラクタ
   *
   * @param trainNumber 計算する列車番号
   */
  constructor (trainNumber: string) {
    this.trainNumber = trainNumber;
  }
}

export default TrainNumberCalc;
