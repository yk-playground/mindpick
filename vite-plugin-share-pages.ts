import type { Plugin } from 'vite'

interface ResultMeta {
  quizId: string
  quizTitle: string
  resultId: string
  title: string
  emoji: string
  description: string
  traits: string[]
  color: string
}

const results: ResultMeta[] = [
  // color-personality
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'warm-coral',
    title: '따뜻한 코럴',
    emoji: '🌸',
    description: '당신은 따뜻하고 사교적인 사람이에요! 주변 사람들에게 긍정적인 에너지를 나눠주는 존재예요.',
    traits: ['사교적', '공감능력', '낙천적', '따뜻함'],
    color: '#FF7F7F',
  },
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'calm-lavender',
    title: '차분한 라벤더',
    emoji: '💜',
    description: '당신은 깊은 내면의 세계를 가진 사색가예요. 조용하지만 강한 감수성을 지녔어요.',
    traits: ['감성적', '창의적', '사려깊음', '직관적'],
    color: '#B19CD9',
  },
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'bright-mint',
    title: '상쾌한 민트',
    emoji: '🌿',
    description: '당신은 논리적이면서도 유연한 사고를 가진 사람이에요! 균형 잡힌 성격의 소유자입니다.',
    traits: ['분석적', '유연함', '효율적', '균형감'],
    color: '#98D8C8',
  },
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'sunny-yellow',
    title: '밝은 해바라기',
    emoji: '🌻',
    description: '당신은 에너지 넘치는 아이디어 뱅크! 새로운 것에 대한 호기심이 끝없어요.',
    traits: ['창의적', '모험적', '자유로움', '영감'],
    color: '#FFD93D',
  },
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'deep-navy',
    title: '깊은 네이비',
    emoji: '🌊',
    description: '당신은 신뢰감 넘치는 리더 타입이에요. 체계적이고 계획적인 성격이에요.',
    traits: ['리더십', '계획적', '결단력', '신뢰감'],
    color: '#2C3E6B',
  },
  {
    quizId: 'color-personality',
    quizTitle: '나의 색깔 성격 유형은?',
    resultId: 'soft-peach',
    title: '부드러운 피치',
    emoji: '🍑',
    description: '당신은 부드럽고 배려심 깊은 사람이에요. 주변 사람들의 감정을 잘 읽어요.',
    traits: ['배려심', '섬세함', '조화로움', '안정적'],
    color: '#FFCBA4',
  },
  // stress-animal
  {
    quizId: 'stress-animal',
    quizTitle: '스트레스 받을 때 나는 어떤 동물?',
    resultId: 'lion',
    title: '불꽃 사자',
    emoji: '🦁',
    description: '스트레스가 올수록 더 불타오르는 당신! 정면돌파하는 용감한 사자 타입이에요.',
    traits: ['끈기', '열정', '도전정신', '추진력'],
    color: '#FF6B35',
  },
  {
    quizId: 'stress-animal',
    quizTitle: '스트레스 받을 때 나는 어떤 동물?',
    resultId: 'cat',
    title: '느긋한 고양이',
    emoji: '🐱',
    description: '일단 자고 일어나면 해결된다! 여유롭고 마이페이스인 고양이 타입이에요.',
    traits: ['여유로움', '마이페이스', '적응력', '자기관리'],
    color: '#A8A4CE',
  },
  {
    quizId: 'stress-animal',
    quizTitle: '스트레스 받을 때 나는 어떤 동물?',
    resultId: 'dolphin',
    title: '다정한 돌고래',
    emoji: '🐬',
    description: '대화와 공감으로 어려움을 이겨내는 돌고래 타입이에요. 유대감이 당신의 힘!',
    traits: ['공감능력', '사교적', '유대감', '소통'],
    color: '#64B5F6',
  },
  {
    quizId: 'stress-animal',
    quizTitle: '스트레스 받을 때 나는 어떤 동물?',
    resultId: 'beaver',
    title: '실용적인 비버',
    emoji: '🦫',
    description: '문제가 생기면 바로 해결책을 찾는 실용적인 비버 타입! 팀의 해결사입니다.',
    traits: ['실용적', '합리적', '효율적', '문제해결'],
    color: '#8D6E63',
  },
  {
    quizId: 'stress-animal',
    quizTitle: '스트레스 받을 때 나는 어떤 동물?',
    resultId: 'owl',
    title: '전략가 부엉이',
    emoji: '🦉',
    description: '스트레스 상황에서도 침착하게 계획을 세우는 부엉이 타입! 분석적 사고의 달인.',
    traits: ['계획적', '분석적', '침착함', '체계적'],
    color: '#607D8B',
  },
]

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function generateOgImage(result: ResultMeta): string {
  const tagsSvg = result.traits
    .map((trait, i) => {
      const tagWidth = trait.length * 20 + 30
      const totalWidth = result.traits.reduce((sum, t) => sum + t.length * 20 + 40, 0)
      const startX = (1200 - totalWidth) / 2
      let offsetX = startX
      for (let j = 0; j < i; j++) {
        offsetX += result.traits[j].length * 20 + 40
      }
      return `<rect x="${offsetX}" y="415" width="${tagWidth}" height="34" rx="17" fill="white" opacity="0.2"/>
    <text x="${offsetX + tagWidth / 2}" y="437" text-anchor="middle" font-size="15" fill="white" font-family="-apple-system, BlinkMacSystemFont, sans-serif">#${escapeHtml(trait)}</text>`
    })
    .join('\n    ')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${result.color}"/>
      <stop offset="100%" style="stop-color:${result.color}dd"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="100" cy="80" r="120" fill="white" opacity="0.06"/>
  <circle cx="1100" cy="550" r="150" fill="white" opacity="0.06"/>
  <rect x="80" y="80" width="1040" height="470" rx="24" fill="white" opacity="0.1" stroke="white" stroke-opacity="0.2"/>
  <text x="600" y="230" text-anchor="middle" font-size="90">${result.emoji}</text>
  <text x="600" y="320" text-anchor="middle" font-size="48" font-weight="bold" fill="white" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${escapeHtml(result.title)}</text>
  <text x="600" y="370" text-anchor="middle" font-size="22" fill="white" opacity="0.8" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${escapeHtml(result.quizTitle)}</text>
  ${tagsSvg}
  <text x="600" y="520" text-anchor="middle" font-size="20" fill="white" opacity="0.6" font-family="-apple-system, BlinkMacSystemFont, sans-serif">MindPick</text>
</svg>`
}

function generateHTML(result: ResultMeta, base: string): string {
  const siteUrl = `https://yk-playground.github.io${base}`
  const shareUrl = `${siteUrl}share/${result.quizId}/${result.resultId}/`
  const encoded = Buffer.from(`${result.quizId}:${result.resultId}`).toString('base64')
  const spaUrl = `${siteUrl}#/result/${encoded}`
  const ogTitle = `${result.emoji} ${result.title} - MindPick`
  const ogDesc = `${result.description} ${result.traits.map((t) => '#' + t).join(' ')}`
  const ogImage = `${siteUrl}share/${result.quizId}/${result.resultId}/og.svg`

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(ogDesc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${shareUrl}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="MindPick" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(ogDesc)}" />
  <meta name="twitter:image" content="${ogImage}" />
  <meta http-equiv="refresh" content="0;url=${spaUrl}" />
  <title>${escapeHtml(ogTitle)}</title>
</head>
<body>
  <p style="text-align:center;margin-top:40vh;font-family:sans-serif;color:#666;">잠시만 기다려주세요...</p>
  <script>location.replace("${spaUrl}")</script>
</body>
</html>`
}

export function sharePages(): Plugin {
  let base = '/mindpick/'

  return {
    name: 'share-pages',
    configResolved(config) {
      base = config.base
    },
    generateBundle() {
      for (const result of results) {
        // Emit HTML page
        this.emitFile({
          type: 'asset',
          fileName: `share/${result.quizId}/${result.resultId}/index.html`,
          source: generateHTML(result, base),
        })

        // Emit per-result OG image
        this.emitFile({
          type: 'asset',
          fileName: `share/${result.quizId}/${result.resultId}/og.svg`,
          source: generateOgImage(result),
        })
      }
    },
  }
}
