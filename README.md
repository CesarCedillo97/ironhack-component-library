# Documentación de Componentes

Componentes en RN con typescript, en los cuales se usaron generic types para poder ser más accesible con los datos que se pueden mandar type guards para poder mostrar diferente información y algunos utilitys para poder hacer opcionales algunos elementos.

1. Button
   Un botón personalizable que permite manejar eventos al ser presionado, uso ConfigOptions para que los props sean opcionales y tengan valores predeterminados usando static types.

2. InputField
   Un campo de entrada genérico que soporta valores de texto y números, se usan tipos genéricos para asegurar que la entrada sea del tipo esperado y para manejar cambios de manera segura, se usaron type guards.

3. List
   Una lista que puede contener filtrados dinámicamente, se usarion tipos genéricos para asegurar que los datos y filtros puedan ser usados de manera consistente

Para correrlo, solo es correr yarn install y yarn {web | ios | android}
