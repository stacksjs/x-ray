export interface Log {
  content: string | Array<any> | object | any
  type: string
  file: string
  expanded: boolean
  color: string
  time: string
}
