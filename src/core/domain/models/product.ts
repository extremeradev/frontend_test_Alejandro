// ProductSummary para el listado de productos
export interface ProductSummary {
  id: string
  brand: string
  model: string
  price: string
  imgUrl: string
}

// ProductDetail con todo lo que devuelve la API
export interface ProductDetail {
  id: string
  brand: string
  model: string
  price: string
  imgUrl: string
  cpu: string
  ram: string
  os: string
  displayResolution: string
  battery: string
  primaryCamera: string[]
  dimentions: string
  weight: string
  colors: string[]
  options: {
    colors: { code: number; name: string }[]
    storages: { code: number; name: string }[]
  }
  // el resto de campos que no se muestran pero vienen en la respuesta
  networkTechnology?: string
  networkSpeed?: string
  announced?: string
  status?: string
  sim?: string[]
  displayType?: string
  displaySize?: string
  chipset?: string
  gpu?: string
  internalMemory?: string[]
  secondaryCmera?: string
  speaker?: string
  audioJack?: string
  wlan?: string
  bluetooth?: string
  gps?: string
  nfc?: string
  radio?: string
  usb?: string
  sensors?: string[]
}