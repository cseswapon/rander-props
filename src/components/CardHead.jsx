import CardHeadless from "./CardHeadless";

const CardHead = () => {
  return (
    <CardHeadless>
      {({
        hovered,
        selected,
        expanded,
        // setSelected,
        // setExpanded,
        toggleExpand,
        onMouseEnter,
        onMouseLeave,
        onCardClick,
      }) => (
        <div
          style={{
            border: "1px solid gray",
            padding: "1rem",
            background: hovered ? "lightblue" : "pink",
            color: selected ? "red" : "blue",
            cursor: "pointer",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onCardClick}
        >
          {JSON.stringify(console.log(hovered, selected))}
          <h3>Product Title</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            {" "}
            {expanded ? "Collapse" : "Expand"}
          </button>
          <p>Small teaser text goes here</p>
          <div>Full description ....</div>
          <button>Add</button>
          <button>Whitelist</button>
        </div>
      )}
    </CardHeadless>
  );
};

export default CardHead;
