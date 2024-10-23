<template>
  <svg>
    <defs>
      <filter id="shake-1">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.02 1"
          numOctaves="3"
          result="noise"
          seed="0"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="2"
        />
      </filter>
      <filter id="shake-2">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.02 1"
          numOctaves="3"
          result="noise"
          seed="1"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="3"
        />
      </filter>
      <filter id="shake-3">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.02 1"
          numOctaves="3"
          result="noise"
          seed="2"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="4"
        />
      </filter>
      <filter id="shake-4">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.02 1"
          numOctaves="3"
          result="noise"
          seed="4"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="6"
        />
      </filter>
      <filter id="shake-5">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.02 1"
          numOctaves="3"
          result="noise"
          seed="5"
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          in2="noise"
          scale="2"
        />
      </filter>
    </defs>
  </svg>
</template>

<style>
svg {
  width: 0;
  height: 0;
}
@keyframes shake {
  0% {
    filter: url(#shake-1);
  }
  25% {
    filter: url(#shake-2);
  }
  50% {
    filter: url(#shake-3);
  }
  75% {
    filter: url(#shake-4);
  }
  100% {
    filter: url(#shake-5);
  }
}
</style>
