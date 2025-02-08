const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  number: string;
}) => {
  let marginLeft = String(props.number).split(".")[1] ? "40px" : "0";

  return (
    <li style={{ "margin-left": marginLeft }}>
      <span>{props.number} - </span>
      <a href={`/lecture-notes/${props.href}`}>{props.label}</a>
    </li>
    // <a
    //   href={`/article/${props.href}`}
    //   class="slice flex items-baseline justify-between !leading-9 lg:!leading-10 !text-3xl">
    //   <span class="block !w-fit">{props.article_type}</span>
    //   <span class="dots !w-auto"></span>
    //   <span class="sm:hidden !w-auto">
    //     {props.on_mobile == "" ? props.label : props.on_mobile}
    //   </span>
    //   <span class="hidden sm:block !w-auto">{props.label}</span>
    // </a>
  );
};

export default TOCItem;
