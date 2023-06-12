export default function destructure({
  special: [{
    id, name, description = 'Описание недоступно', icon,
  }],
}) {
  return {
    id, name, description, icon,
  };
}
