export function getCleanCtx(
  canvas: HTMLCanvasElement,
  p3: boolean
): CanvasRenderingContext2D {
  let ctx = canvas.getContext('2d', { colorSpace: p3 ? 'display-p3' : 'srgb' })!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  return ctx
}

export function initCanvasSize(canvas: HTMLCanvasElement): [number, number] {
  let pixelRation = Math.ceil(window.devicePixelRatio)
  let canvasSize = canvas.getBoundingClientRect()
  let width = canvasSize.width * pixelRation
  let height = canvasSize.height * pixelRation
  canvas.width = width
  canvas.height = height
  return [width, height]
}
