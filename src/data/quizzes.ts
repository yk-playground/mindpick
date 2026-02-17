import type { Quiz } from '../types'
import { getHighestScoreKey } from '../utils/scoring'

export const colorPersonalityQuiz: Quiz = {
  id: 'color-personality',
  title: '나의 색깔 성격 유형은?',
  description: '12가지 질문으로 알아보는 나만의 색깔 성격!',
  emoji: '🎨',
  color: '#FFB5C2',
  questions: [
    {
      id: 1,
      question: '주말 아침, 눈을 떴을 때 가장 먼저 하고 싶은 것은?',
      options: [
        { text: '친구에게 연락해서 약속 잡기', scores: { E: 2, F: 1 } },
        { text: '좋아하는 음악 틀고 느긋하게 커피 마시기', scores: { I: 2, P: 1 } },
        { text: '오늘 할 일 목록 정리하기', scores: { J: 2, T: 1 } },
        { text: '새로운 레시피로 브런치 만들기', scores: { N: 2, P: 1 } },
      ],
    },
    {
      id: 2,
      question: '친구가 갑자기 고민을 털어놓았을 때 나는?',
      options: [
        { text: '일단 끝까지 들어준다', scores: { F: 2, I: 1 } },
        { text: '해결책을 찾아서 알려준다', scores: { T: 2, J: 1 } },
        { text: '같이 맛있는 거 먹으러 가자고 한다', scores: { E: 2, F: 1 } },
        { text: '비슷한 내 경험을 이야기해준다', scores: { E: 1, N: 1 } },
      ],
    },
    {
      id: 3,
      question: '새로운 프로젝트를 시작할 때 나는?',
      options: [
        { text: '일단 바로 시작해본다', scores: { P: 2, E: 1 } },
        { text: '계획부터 꼼꼼하게 세운다', scores: { J: 2, T: 1 } },
        { text: '관련 자료를 엄청 찾아본다', scores: { N: 2, I: 1 } },
        { text: '같이 할 사람부터 모은다', scores: { E: 2, F: 1 } },
      ],
    },
    {
      id: 4,
      question: '스트레스를 받았을 때 푸는 방법은?',
      options: [
        { text: '혼자 조용히 산책하기', scores: { I: 2, N: 1 } },
        { text: '친구들과 수다 떨기', scores: { E: 2, F: 1 } },
        { text: '운동으로 땀 흘리기', scores: { T: 1, J: 1 } },
        { text: '넷플릭스 정주행하기', scores: { I: 1, P: 2 } },
      ],
    },
    {
      id: 5,
      question: '여행을 간다면 선호하는 스타일은?',
      options: [
        { text: '분 단위로 계획된 알찬 여행', scores: { J: 2, T: 1 } },
        { text: '숙소만 잡고 즉흥적으로!', scores: { P: 2, N: 1 } },
        { text: '현지인 추천 맛집 위주 여행', scores: { E: 1, F: 1 } },
        { text: '조용한 자연 속 힐링 여행', scores: { I: 2, N: 1 } },
      ],
    },
    {
      id: 6,
      question: '모임에서 나는 보통?',
      options: [
        { text: '분위기 메이커!', scores: { E: 2, P: 1 } },
        { text: '조용히 듣다가 핵심만 말한다', scores: { I: 2, T: 1 } },
        { text: '모두의 이야기에 공감해준다', scores: { F: 2, E: 1 } },
        { text: '재미있는 아이디어를 내놓는다', scores: { N: 2, P: 1 } },
      ],
    },
    {
      id: 7,
      question: '선물을 고를 때 나는?',
      options: [
        { text: '상대방이 평소에 갖고 싶다고 한 것', scores: { F: 2, J: 1 } },
        { text: '실용적이고 좋은 품질의 것', scores: { T: 2, J: 1 } },
        { text: '특별하고 유니크한 것', scores: { N: 2, P: 1 } },
        { text: '함께 경험할 수 있는 것 (공연, 여행)', scores: { E: 2, F: 1 } },
      ],
    },
    {
      id: 8,
      question: '결정을 내릴 때 가장 중요한 기준은?',
      options: [
        { text: '논리적으로 맞는지', scores: { T: 2, J: 1 } },
        { text: '나와 주변 사람의 감정', scores: { F: 2, E: 1 } },
        { text: '직감이 이끄는 대로', scores: { N: 2, P: 1 } },
        { text: '과거 경험과 데이터', scores: { T: 1, J: 2 } },
      ],
    },
    {
      id: 9,
      question: '이상적인 작업 환경은?',
      options: [
        { text: '카페처럼 적당한 소음이 있는 곳', scores: { E: 2, P: 1 } },
        { text: '조용하고 정돈된 나만의 공간', scores: { I: 2, J: 1 } },
        { text: '팀원들과 함께하는 오픈 오피스', scores: { E: 2, F: 1 } },
        { text: '자유롭게 이동하며 일하기', scores: { P: 2, N: 1 } },
      ],
    },
    {
      id: 10,
      question: '영화를 고를 때 선호하는 장르는?',
      options: [
        { text: '감동적인 드라마/로맨스', scores: { F: 2, N: 1 } },
        { text: '스릴 넘치는 액션/스릴러', scores: { T: 1, E: 1 } },
        { text: '상상력 가득한 판타지/SF', scores: { N: 2, I: 1 } },
        { text: '실화 기반 다큐멘터리', scores: { T: 2, J: 1 } },
      ],
    },
    {
      id: 11,
      question: 'SNS를 사용하는 스타일은?',
      options: [
        { text: '일상을 자주 공유한다', scores: { E: 2, F: 1 } },
        { text: '구경만 하고 거의 안 올린다', scores: { I: 2, T: 1 } },
        { text: '유용한 정보/리뷰를 공유한다', scores: { T: 1, J: 1 } },
        { text: '감성 사진/글을 올린다', scores: { N: 2, F: 1 } },
      ],
    },
    {
      id: 12,
      question: '10년 후 나의 모습은?',
      options: [
        { text: '안정적인 직장에서 인정받는 전문가', scores: { J: 2, T: 1 } },
        { text: '자유롭게 세계를 여행하며 사는 사람', scores: { P: 2, N: 1 } },
        { text: '사랑하는 사람들과 행복한 가정', scores: { F: 2, E: 1 } },
        { text: '나만의 사업으로 성공한 CEO', scores: { T: 1, N: 1, E: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'warm-coral',
      title: '따뜻한 코럴',
      emoji: '🌸',
      description:
        '당신은 따뜻하고 사교적인 사람이에요! 주변 사람들에게 긍정적인 에너지를 나눠주고, 모임에서 분위기를 밝게 만드는 존재예요. 감정에 솔직하고, 사람들과의 관계를 소중히 여기는 당신은 모두에게 사랑받는 존재입니다.',
      traits: ['사교적', '공감능력', '낙천적', '따뜻함'],
      color: '#FF7F7F',
    },
    {
      id: 'calm-lavender',
      title: '차분한 라벤더',
      emoji: '💜',
      description:
        '당신은 깊은 내면의 세계를 가진 사색가예요. 조용하지만 강한 감수성을 지녔고, 예술적 감각이 뛰어나요. 혼자만의 시간에서 에너지를 충전하며, 소수의 깊은 관계를 선호합니다.',
      traits: ['감성적', '창의적', '사려깊음', '직관적'],
      color: '#B19CD9',
    },
    {
      id: 'bright-mint',
      title: '상쾌한 민트',
      emoji: '🌿',
      description:
        '당신은 논리적이면서도 유연한 사고를 가진 사람이에요! 문제를 체계적으로 분석하면서도 새로운 아이디어에 열려있어요. 효율을 중시하지만 주변 사람들의 감정도 잘 챙기는 균형 잡힌 성격의 소유자입니다.',
      traits: ['분석적', '유연함', '효율적', '균형감'],
      color: '#98D8C8',
    },
    {
      id: 'sunny-yellow',
      title: '밝은 해바라기',
      emoji: '🌻',
      description:
        '당신은 에너지 넘치는 아이디어 뱅크! 새로운 것에 대한 호기심이 끝없고, 모험을 두려워하지 않아요. 자유로운 영혼으로 틀에 박힌 것을 싫어하며, 주변 사람들에게 영감을 주는 존재예요.',
      traits: ['창의적', '모험적', '자유로움', '영감'],
      color: '#FFD93D',
    },
    {
      id: 'deep-navy',
      title: '깊은 네이비',
      emoji: '🌊',
      description:
        '당신은 신뢰감 넘치는 리더 타입이에요. 체계적이고 계획적인 성격으로, 목표를 세우면 끝까지 해내는 끈기를 가졌어요. 논리적 사고와 결단력이 뛰어나며, 주변에서 든든한 존재로 인정받습니다.',
      traits: ['리더십', '계획적', '결단력', '신뢰감'],
      color: '#2C3E6B',
    },
    {
      id: 'soft-peach',
      title: '부드러운 피치',
      emoji: '🍑',
      description:
        '당신은 부드럽고 배려심 깊은 사람이에요. 주변 사람들의 감정을 잘 읽고, 갈등 상황에서 중재자 역할을 해요. 안정적인 환경을 좋아하면서도, 소소한 변화에서 즐거움을 찾는 섬세한 성격입니다.',
      traits: ['배려심', '섬세함', '조화로움', '안정적'],
      color: '#FFCBA4',
    },
  ],
  calculateResult(scores: Record<string, number>) {
    const e = scores['E'] || 0
    const i = scores['I'] || 0
    const t = scores['T'] || 0
    const f = scores['F'] || 0
    const j = scores['J'] || 0
    const p = scores['P'] || 0
    const n = scores['N'] || 0

    const isExtroverted = e > i
    const isFeeling = f > t
    const isJudging = j > p
    const isIntuitive = n > (t + f) / 4

    if (isExtroverted && isFeeling) return 'warm-coral'
    if (!isExtroverted && isIntuitive && isFeeling) return 'calm-lavender'
    if (!isExtroverted && !isFeeling && isJudging) return 'deep-navy'
    if (isExtroverted && !isFeeling && !isJudging) return 'sunny-yellow'
    if (!isExtroverted && isFeeling && isJudging) return 'soft-peach'
    return 'bright-mint'
  },
}

export const stressAnimalQuiz: Quiz = {
  id: 'stress-animal',
  title: '스트레스 받을 때 나는 어떤 동물?',
  description: '스트레스 대처 유형을 귀여운 동물로 알아보세요!',
  emoji: '🐾',
  color: '#C8E6C9',
  questions: [
    {
      id: 1,
      question: '마감이 하루 남았을 때 나는?',
      options: [
        { text: '밤새워서라도 끝낸다', scores: { fighter: 2 } },
        { text: '일단 자고 내일 생각한다', scores: { sleeper: 2 } },
        { text: '주변에 도움을 요청한다', scores: { social: 2 } },
        { text: '완벽하지 않아도 일단 제출한다', scores: { practical: 2 } },
      ],
    },
    {
      id: 2,
      question: '갑작스러운 변화가 생겼을 때?',
      options: [
        { text: '빠르게 적응하고 대처한다', scores: { fighter: 1, practical: 1 } },
        { text: '일단 상황을 관망한다', scores: { sleeper: 2 } },
        { text: '주변 사람들의 반응을 살핀다', scores: { social: 2 } },
        { text: '불안하지만 나름 계획을 세운다', scores: { planner: 2 } },
      ],
    },
    {
      id: 3,
      question: '스트레스 해소 음식은?',
      options: [
        { text: '매운 떡볶이', scores: { fighter: 2 } },
        { text: '달달한 케이크', scores: { sleeper: 1, social: 1 } },
        { text: '든든한 고기', scores: { practical: 2 } },
        { text: '따뜻한 차 한잔', scores: { planner: 2 } },
      ],
    },
    {
      id: 4,
      question: '일이 잘 안 풀릴 때 드는 생각은?',
      options: [
        { text: '더 열심히 해야지!', scores: { fighter: 2 } },
        { text: '좀 쉬었다가 하자', scores: { sleeper: 2 } },
        { text: '누군가에게 이야기하고 싶다', scores: { social: 2 } },
        { text: '다른 방법을 찾아보자', scores: { practical: 1, planner: 1 } },
      ],
    },
    {
      id: 5,
      question: '시험/면접 전날 밤에 나는?',
      options: [
        { text: '마지막까지 공부/준비한다', scores: { fighter: 2 } },
        { text: '일찍 자서 컨디션 관리한다', scores: { planner: 2 } },
        { text: '친구와 통화하며 긴장을 푼다', scores: { social: 2 } },
        { text: '될 대로 되라! 마음을 비운다', scores: { sleeper: 1, practical: 1 } },
      ],
    },
    {
      id: 6,
      question: '팀 프로젝트에서 갈등이 생기면?',
      options: [
        { text: '내 의견을 논리적으로 설명한다', scores: { fighter: 1, planner: 1 } },
        { text: '일단 한 발 물러서 지켜본다', scores: { sleeper: 2 } },
        { text: '중재자 역할을 자처한다', scores: { social: 2 } },
        { text: '가장 효율적인 방안을 제시한다', scores: { practical: 2 } },
      ],
    },
    {
      id: 7,
      question: '번아웃이 왔을 때 나의 회복법은?',
      options: [
        { text: '새로운 취미를 시작한다', scores: { fighter: 1, practical: 1 } },
        { text: '며칠간 아무것도 안 한다', scores: { sleeper: 2 } },
        { text: '사랑하는 사람들과 시간을 보낸다', scores: { social: 2 } },
        { text: '일상의 루틴을 재정비한다', scores: { planner: 2 } },
      ],
    },
    {
      id: 8,
      question: '갑자기 큰 돈이 필요할 때?',
      options: [
        { text: '부업을 알아본다', scores: { fighter: 2 } },
        { text: '일단 걱정부터 한다', scores: { sleeper: 2 } },
        { text: '주변에 상의한다', scores: { social: 2 } },
        { text: '지출을 분석하고 절약 계획을 세운다', scores: { planner: 1, practical: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'lion',
      title: '불꽃 사자',
      emoji: '🦁',
      description:
        '스트레스가 올수록 더 불타오르는 당신! 어떤 상황에서도 포기하지 않고 정면돌파하는 용감한 사자 타입이에요. 끈기와 열정이 넘치지만, 가끔은 쉬어가도 괜찮다는 걸 기억하세요!',
      traits: ['끈기', '열정', '도전정신', '추진력'],
      color: '#FF6B35',
    },
    {
      id: 'cat',
      title: '느긋한 고양이',
      emoji: '🐱',
      description:
        '스트레스? 일단 자고 일어나면 해결된다! 여유롭고 마이페이스인 당신은 고양이 타입이에요. 남들이 뭐라하든 자기만의 속도로 살아가는 지혜가 있어요.',
      traits: ['여유로움', '마이페이스', '적응력', '자기관리'],
      color: '#A8A4CE',
    },
    {
      id: 'dolphin',
      title: '다정한 돌고래',
      emoji: '🐬',
      description:
        '스트레스를 받으면 사람을 찾는 당신! 대화와 공감으로 어려움을 이겨내는 돌고래 타입이에요. 주변 사람들과의 유대감이 당신의 힘이며, 당신도 다른 사람에게 큰 위로가 됩니다.',
      traits: ['공감능력', '사교적', '유대감', '소통'],
      color: '#64B5F6',
    },
    {
      id: 'beaver',
      title: '실용적인 비버',
      emoji: '🦫',
      description:
        '문제가 생기면 바로 해결책을 찾는 실용적인 비버 타입! 감정에 휘둘리지 않고 현실적으로 대처하는 능력이 뛰어나요. 효율적이고 합리적인 당신은 팀의 해결사입니다.',
      traits: ['실용적', '합리적', '효율적', '문제해결'],
      color: '#8D6E63',
    },
    {
      id: 'owl',
      title: '전략가 부엉이',
      emoji: '🦉',
      description:
        '스트레스 상황에서도 침착하게 계획을 세우는 부엉이 타입! 분석적 사고로 상황을 정리하고, 체계적으로 문제를 해결해나가요. 당신의 차분함은 주변 사람들에게도 안정감을 줍니다.',
      traits: ['계획적', '분석적', '침착함', '체계적'],
      color: '#607D8B',
    },
  ],
  calculateResult(scores: Record<string, number>) {
    const key = getHighestScoreKey(scores)
    const mapping: Record<string, string> = {
      fighter: 'lion',
      sleeper: 'cat',
      social: 'dolphin',
      practical: 'beaver',
      planner: 'owl',
    }
    return mapping[key] || 'beaver'
  },
}

export const allQuizzes: Quiz[] = [colorPersonalityQuiz, stressAnimalQuiz]

export function getQuizById(id: string): Quiz | undefined {
  return allQuizzes.find((q) => q.id === id)
}
