var forge_pagages = [
  'arduino',
  'audio',
  'cgi',
  'communications',
  'control',
  'data-smoothing',
  'database',
  'dataframe',
  'dicom',
  'doctest',
  'econometrics',
  'fem-fenics',
  'financial',
  'fuzzy-logic-toolkit',
  'ga',
  'general',
  'generate_html',
  'geometry',
  'gsl',
  'image',
  'image-acquisition',
  'instrument-control',
  'interval',
  'io',
  'level-set',
  'linear-algebra',
  'lssa',
  'mapping',
  'miscellaneous',
  'mvn',
  'netcdf',
  'ocl',
  'optics',
  'optim',
  'optiminterp',
  'parallel',
  'quaternion',
  'queueing',
  'signal',
  'sockets',
  'sparsersb',
  'splines',
  'statistics',
  'strings',
  'struct',
  'symbolic',
  'video',
  'vrml',
  'windows',
  'zeromq',
  'bim',
  'bsltl',
  'divand',
  'fits',
  'fpl',
  'ltfat',
  'matgeom',
  'msh',
  'nan',
  'ncarray',
  'nurbs',
  'ocs',
  'octclip',
  'octproj',
  'secs1d',
  'secs2d',
  'secs3d',
  'stk',
  'tisean',
  'tsa',
  'vibes'
];

var forgeQueries = [];
forge_pagages.forEach(name => forgeQueries.push(
  {label: name,
   api: 'Action=get&Format=HTMLCSS&OpenClosed=open'
        + '&Title=[octave%20forge]%20(' + name + ')',
   url: 'https://octave.sourceforge.io/' + name
  }));


localStorage.setItem("forgeQueries", JSON.stringify(forgeQueries));