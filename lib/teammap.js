'use strict'

const teammap = {
  atl: {
    id: 1610612737,
    city: 'Atlanta',
    team: 'Hawks',
    color: '#E03A3E',
    conf: 'eastern',
    logo: require('../public/teams/atl.png')
  },
  bkn: {
    id: 1610612751,
    city: 'Brooklyn',
    team: 'Nets',
    color: '#000',
    conf: 'eastern',
    logo: require('../public/teams/bkn.png')
  },
  bos: {
    id: 1610612738,
    city: 'Boston',
    team: 'Celtics',
    color: '#008348',
    conf: 'eastern',
    logo: require('../public/teams/bos.png')
  },
  cha: {
    id: 1610612766,
    city: 'Charlotte',
    team: 'Hornets',
    color: '#008CA8',
    conf: 'eastern',
    logo: require('../public/teams/cha.png')
  },
  chi: {
    id: 1610612741,
    city: 'Chicago',
    team: 'Bulls',
    color: '#CE1141',
    conf: 'eastern',
    logo: require('../public/teams/chi.png')
  },
  cle: {
    id: 1610612739,
    city: 'Cleveland',
    team: 'Cavaliers',
    color: '#860038',
    conf: 'eastern',
    logo: require('../public/teams/cle.png')
  },
  dal: {
    id: 1610612742,
    city: 'Dallas',
    team: 'Mavericks',
    color: '#007DC5',
    conf: 'western',
    logo: require('../public/teams/dal.png')
  },
  den: {
    id: 1610612743,
    city: 'Denver',
    team: 'Nuggets',
    color: '#FFB20F',
    conf: 'western',
    logo: require('../public/teams/den.png')
  },
  det: {
    id: 1610612765,
    city: 'Detroit',
    team: 'Pistons',
    color: '#006BB6',
    conf: 'eastern',
    logo: require('../public/teams/det.png')
  },
  gsw: {
    id: 1610612744,
    city: 'Golden State',
    team: 'Warriors',
    color: '#FDB927',
    conf: 'western',
    logo: require('../public/teams/gsw.png')
  },
  hou: {
    id: 1610612745,
    city: 'Houston',
    team: 'Rockets',
    color: '#CE1141',
    conf: 'western',
    logo: require('../public/teams/hou.png'),
    logo2: require('../public/teams/hou2.png')
  },
  ind: {
    id: 1610612754,
    city: 'Indiana',
    team: 'Pacers',
    color: '#FFC633',
    conf: 'eastern',
    logo: require('../public/teams/ind.png')
  },
  lac: {
    id: 1610612746,
    city: 'Los Angeles',
    team: 'Clippers',
    color: '#222',
    conf: 'western',
    logo: require('../public/teams/lac.png')
  },
  lal: {
    id: 1610612747,
    city: 'Los Angeles',
    team: 'Lakers',
    color: '#552582',
    conf: 'western',
    logo: require('../public/teams/lal.png')
  },
  mem: {
    id: 1610612763,
    city: 'Memphis',
    team: 'Grizzlies',
    color: '#6189B9',
    conf: 'western',
    logo: require('../public/teams/mem.png')
  },
  mia: {
    id: 1610612748,
    city: 'Miami',
    team: 'Heat',
    color: '#98002E',
    conf: 'eastern',
    logo: require('../public/teams/mia.png')
  },
  mil: {
    id: 1610612749,
    city: 'Milwaukee',
    team: 'Bucks',
    color: '#00471B',
    conf: 'eastern',
    logo: require('../public/teams/mil.png')
  },
  min: {
    id: 1610612750,
    city: 'Minnesota',
    team: 'Timberwolves',
    color: '#005083',
    conf: 'western',
    logo: require('../public/teams/min.png')
  },
  nop: {
    id: 1610612740,
    city: 'New Orleans',
    team: 'Pelicans',
    color: '#002B5C',
    conf: 'western',
    logo: require('../public/teams/nop.png')
  },
  nyk: {
    id: 1610612752,
    city: 'New York',
    team: 'Knicks',
    color: '#F58426',
    conf: 'eastern',
    logo: require('../public/teams/nyk.png')
  },
  okc: {
    id: 1610612760,
    city: 'Oklahoma City',
    team: 'Thunder',
    color: '#F05133',
    conf: 'western',
    logo: require('../public/teams/okc.png')
  },
  orl: {
    id: 1610612753,
    city: 'Orlando',
    team: 'Magic',
    color: '#007DC5',
    conf: 'eastern',
    logo: require('../public/teams/orl.png')
  },
  phi: {
    id: 1610612755,
    city: 'Philadelphia',
    team: '76ers',
    color: '#006BB6',
    conf: 'eastern',
    logo: require('../public/teams/phi.png')
  },
  phx: {
    id: 1610612756,
    city: 'Phoenix',
    team: 'Suns',
    color: '#E56020',
    conf: 'western',
    logo: require('../public/teams/phx.png')
  },
  por: {
    id: 1610612757,
    city: 'Portland',
    team: 'Trail Blazers',
    color: '#000',
    conf: 'western',
    logo: require('../public/teams/por.png')
  },
  sac: {
    id: 1610612758,
    city: 'Sacramento',
    team: 'Kings',
    color: '#724C9F',
    conf: 'western',
    logo: require('../public/teams/sac.png')
  },
  sas: {
    id: 1610612759,
    city: 'San Antonio',
    team: 'Spurs',
    color: '#B6BFBF',
    conf: 'western',
    logo: require('../public/teams/sas.png')
  },
  tor: {
    id: 1610612761,
    city: 'Toronto',
    team: 'Raptors',
    color: '#CE1141',
    conf: 'eastern',
    logo: require('../public/teams/tor.png')
  },
  uta: {
    id: 1610612762,
    city: 'Utah',
    team: 'Jazz',
    color: '#00471B',
    conf: 'western',
    logo: require('../public/teams/uta.png')
  },
  was: {
    id: 1610612764,
    city: 'Washington',
    team: 'Wizards',
    color: '#F5002F',
    conf: 'eastern',
    logo: require('../public/teams/was.png')
  }
}
export default teammap 
