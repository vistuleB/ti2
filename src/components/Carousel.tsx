import { children, createSignal, For, ParentProps } from "solid-js";

const Carousel = (props: ParentProps) => {
  let images = children(() => props.children);
  let [selectedImage, setSelectedImage] = createSignal(0);

  return (
    <>
      <a
        class="left carousel-control-prev-icon"
        href="#all-monomials"
        onClick={() => {
          setSelectedImage(
            (selectedImage() - 1 + images.toArray().length) %
              images.toArray().length
          );
        }}>
        <div class="carousel-nav-icon">
          <img src="../img/carousel-prev-icon.svg" />
        </div>
      </a>

      <a
        class="right carousel-control-next-icon"
        href="#all-monomials"
        onClick={() => {
          setSelectedImage((selectedImage() + 1) % images.toArray().length);
        }}>
        <div class="carousel-nav-icon">
          <img src="../img/carousel-next-icon.svg" />
        </div>
      </a>
      <div id="all-monomials" class="carousel" style="display:inline-block">
        <ol class="carousel-indicators">
          <For each={images.toArray()}>
            {(child, index) => {
              return (
                <li
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                  class={`${selectedImage() === index() && "active"}`}>
                  {child}
                </li>
              );
            }}
          </For>
        </ol>
        <div class="carousel-inner" style="display:inline-block">
          <For each={images.toArray()}>
            {(child, index) => {
              return (
                <div
                  class={`item ${selectedImage() === index() ? "active" : ""}`}>
                  {child}
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </>
  );
};

export default Carousel;
