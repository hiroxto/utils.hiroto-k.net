import { TrainNumberType } from '~/types';

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
   * 列車種別を計算
   *
   * @returns 種別計算が完了した場合は列車種別のstringを、エラーが発生した場合はnullを返す
   */
  calc (): TrainNumberType|null {
    if (
      this.trainNumber === '' ||
      this.splitNumber.includes(NaN) ||
      this.splitNumber.length !== 4 ||
      this.trainNumber.startsWith('0')
    ) {
      return null;
    }

    return this.isPassengerNumber() ? this.getPassengerType() : this.getFreightType();
  }

  /**
   * 旅客列車の列車種別計算
   *
   * - 桁数が1,2,4桁で、4桁のときの百位が0の場合, 特急客
   * - 桁数が3,4桁で、百位が0以外かつ、下2桁が00~19の場合、急客
   * - 桁数が3,4桁で、百位が0以外かつ, 下2桁が20~49の場合、客
   * - 千位が6以上の場合、種別の頭に 臨 が付く
   *
   * @returns 列車が旅客列車の物の場合、計算した列車種別を返す。列車番号が旅客列車のものではない場合、nullを返す。
   */
  getPassengerType (): TrainNumberType|null {
    if (!this.isPassengerNumber()) {
      return null;
    }

    const splitNumber = this.splitNumber;
    const isSpecial = this.isPassengerSpecialNumber();

    if (splitNumber[1] === 0) {
      // 特急客
      return isSpecial ? '臨特急客' : '特急客';
    } else if ((splitNumber[0] !== 0 || splitNumber[1] !== 0) && splitNumber[2] <= 1) {
      // 急客
      return isSpecial ? '臨急客' : '急客';
    } else if (splitNumber[1] !== 0 && splitNumber[2] >= 2) {
      // 客
      return isSpecial ? '臨客' : '客';
    } else {
      return null;
    }
  }

  /**
   * 貨物列車の列車種別計算
   *
   * - 千位が0~5で、百位が0の場合、高速貨。下2桁で高速貨Aと高速貨Bに分かれる
   *     - 下2桁が50~69の場合、高速貨A
   *     - 下2桁が70~99の場合、高速貨B
   * - 千位が0,1、百位が1~9、下2桁が50~59の場合、高速貨C
   * - 千位が1,3,4,5、百位が1~9の場合、専貨。下2桁で専貨Aと専貨Bに分かれる
   *     - 下2桁が60~89の場合、専貨A
   *     - 下2桁が90~99の場合、専貨B
   * - 千位が8以上の場合、種別の頭に 臨 が付く
   *
   * @returns 列車が貨物列車の物の場合、計算した列車種別を返す。列車番号が貨物列車のものではない場合、nullを返す。
   */
  getFreightType (): TrainNumberType|null {
    if (!this.isFreightNumber()) {
      return null;
    }

    const splitNumber = this.splitNumber;
    const isSpecial = this.isFreightSpecialNumber();

    if (splitNumber[1] === 0) {
      // 高速貨A,B
      if (splitNumber[2] <= 6) {
        // 高速貨A
        return isSpecial ? '臨高速貨A' : '高速貨A';
      } else {
        // 高速貨B
        return isSpecial ? '臨高速貨B' : '高速貨B';
      }
    } else if ((splitNumber[0] <= 1 || isSpecial) && splitNumber[2] === 5) {
      // 高速貨C
      return isSpecial ? '臨高速貨C' : '高速貨C';
    } else if (splitNumber[2] >= 6 && splitNumber[2] <= 8) {
      // 専貨A
      return isSpecial ? '臨専貨A' : '専貨A';
    } else if (splitNumber[2] === 9) {
      // 専貨B
      return isSpecial ? '臨専貨B' : '専貨B';
    } else {
      return null;
    }
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
  isPassengerSpecialNumber (): boolean {
    return this.isPassengerNumber() && this.splitNumber[0] >= 6;
  }

  /**
   * 貨物列車の臨時列車かの判別
   *
   * 列車番号の千位が8以上の場合は臨時列車
   */
  isFreightSpecialNumber (): boolean {
    return this.isFreightNumber() && this.splitNumber[0] >= 8;
  }

  /**
   * 列車番号を1文字ずつに分割したsplitNumberを設定
   */
  private setSplitNumber (): void {
    this.splitNumber = this.trainNumber.toString().padStart(4, '0').split('').map(s => parseInt(s));
  }
}

export default TrainNumberCalc;
