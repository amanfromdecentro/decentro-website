const InlineImageTextMap = (props) => {
  return props.data.itemsType === "iconDescription" ? (
    <div className="inline-image-text-map" id={props.id ? props.id : ""}>
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }} />
      <p
        className="tagline"
        dangerouslySetInnerHTML={{ __html: props.data.tagline }}
      />

      <div
        className={`contents ${
          props.data.items.length == 2
            ? "item-double"
            : props.data.items.length == 4
            ? "item-quad"
            : "item-triplet"
        }`}
      >
        {props.data.items.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="image-section icon-type-image">
                <img src={item.imageSrc} alt={item.altText} />
              </div>
              <p
                className="item-title"
                dangerouslySetInnerHTML={{ __html: item.itemTitle }}
              />
              <p
                className="item-description"
                dangerouslySetInnerHTML={{ __html: item.itemDescription }}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="inline-image-text-map" id={props.id ? props.id : ""}>
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }} />
      <p
        className="tagline"
        dangerouslySetInnerHTML={{ __html: props.data.tagline }}
      />

      <div
        className={`contents ${
          props.data.items.length == 2
            ? "item-double"
            : props.data.items.length == 4
            ? "item-quad"
            : "item-triplet"
        }`}
      >
        {props.data.items.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="image-section">
                <img src={item.imageSrc} alt={item.altText} />
              </div>
              <p
                className="item-title"
                dangerouslySetInnerHTML={{ __html: item.itemTitle }}
              />
              <p
                className="item-description"
                dangerouslySetInnerHTML={{ __html: item.itemDescription }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InlineImageTextMap;
