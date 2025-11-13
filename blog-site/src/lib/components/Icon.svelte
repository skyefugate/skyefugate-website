<script lang="ts">
  export let name: string;
  export let width = '16px';
  export let height = '16px';
  export let color = 'currentcolor';
  export let hoverColor = 'currentColor';
  export let focusable = 'false';
  export let hover = false;

  let className = '';
  export { className as class };

  const availableIcons = [
    'github',
    'website',
    'star',
    'fork',
    'issue',
    'size',
    'license',
    'github2',
    'dev-to',
    'stackoverflow',
    'mastodon',
    'linkedin',
    'youtube',
    'twitter',
    'reddit',
    'keybase',
    'matrix',
    'email',
    'pgp',
    'instagram',
    'facebook',
    'peerlist',
    'codersrank',
    'omg-lol',
    'more-arrow',
    'expand-down',
    'list',
    'grid',
    'download',
    'search',
    'close',
  ] as const;

  interface Icon {
    box: number;
    name: typeof availableIcons[number];
    svg: string;
  }

  let icons: Icon[] = [
    {
      box: 500,
      name: 'github',
      svg: '<path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>',
    },
    {
      box: 512,
      name: 'search',
      svg: '<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>',
    },
    {
      box: 384,
      name: 'close',
      svg: '<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>',
    },
  ];

  let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  {focusable}
  {width}
  {height}
  class={className + `${hover ? ' hover' : ''}`}
  style={`--iconColor: ${color}; --iconHoverColor: ${hoverColor};`}
  viewBox="0 0 {displayIcon?.box} {displayIcon?.box}"
>
  {@html displayIcon?.svg}
</svg>

<style lang="scss">
  svg {
    fill: var(--iconColor);
    transition: all 0.25s ease-in-out;
    &:hover,
    &.hover {
      animation: colorFade 0.25s ease-in-out;
      fill: var(--iconHoverColor);
      transform: scale(1.1);
    }
  }

  @keyframes colorFade {
    0% {
      fill: var(--iconColor);
    }
    100% {
      fill: var(--iconHoverColor);
    }
  }
</style>
