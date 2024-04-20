import * as Hangul from 'hangul-js'

export default class KoreanTyper {
  value: string
  index: number
  currentPos: number
  charArray: Array<string>
  buffer: string

  constructor(value :string) {
    this.value = value
    this.currentPos = 0
    this.index = 0
    this.buffer = ""
    this.charArray = Hangul.disassemble(value[0])
  }

  // 더 버퍼로부터 문자열을 얻을 수 있는지
  isAvailable():boolean {
    if (this.charArray.length > this.index) return true
    if (this.value.length-1 > this.currentPos) return true
    return false
  }
  getNextString() {
    if (!this.isAvailable()) throw Error("Buffer exhaustion")

    // 버퍼를 모두 소진했으면 하나 더 생성
    if (this.charArray.length === this.index) {
      this.buffer += this.value[this.currentPos] as string
      this.charArray = Hangul.disassemble(this.value[++this.currentPos])
      this.index = 0
    }

    return this.buffer + Hangul.assemble(this.charArray.slice(0,this.index++ +1))
  }
}
