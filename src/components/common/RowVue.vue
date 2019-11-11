<template>
  <div class="row" :style="getRowStyle()">
     <slot></slot>
  </div>
</template>

<script>
  const arrPorps = ['mt', 'mr', 'ml', 'mb', 'pt', 'pr', 'pb', 'pl', 'mx', 'my', 'px', 'py','height', 'width']
  
  export default {
    name: 'RowVue',
    props: arrPorps,
    methods: {
      getRowStyle(){
        let _styles = []
        let self = this
        arrPorps.forEach(v => {
          if (this[v] != null){
            if (v.length === 2)
              _styles.push(self.getPropsType(v) + (this[v]/ 14)+ 'rem !important')
            else
              _styles.push(v + ':' + (this[v]/14) + 'rem')
          }
        })
        return _styles.join(';')
      },
      getPropsType(prop){
        let s1 = prop.indexOf('m') === 0 ? 'margin': 'padding'
        let s2 = (prop||'').toString().substring(1, 2)
        
        switch (s2){
          case 't':
            s1 = s1 + '-top:';
            break;
          case 'r':
            s1 = s1 + '-right:';
            break;
          case 'b':
            s1 = s1 + '-bottom:';
            break;
          case 'l':
            s1 = s1 + '-left:';
            break;
          default:
            break;
        }

        return s1
      }
    },
    
  }
</script>