categories = [
     { id: 1, name: 'Tareas'},
     { id: 2, name: 'Proyectos'},
     { id: 3, name: 'Trabajo'},
     { id: 4, name: 'En la escuela'},
     { id: 5, name: 'En la casa'},
]

categories.each do |attributes|
  category = Category.find_or_initialize_by(id: attributes[:id])
  category.update(attributes)
end
