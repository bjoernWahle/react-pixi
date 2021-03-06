let textures = []

if (typeof window !== 'undefined') {
  const { Text, Texture, TextStyle } = require('pixi.js')
  for (let i = 1; i <= 10; i++) {
    const style = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    })
    const text = new Text(i.toString(), style)
    text.width = 60
    text.height = 50
    textures.push(new Texture(text.texture))
  }
}

export default textures

// [PIXI.Texture.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png")]
