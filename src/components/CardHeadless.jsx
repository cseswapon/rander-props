import React, { useCallback, useMemo, useState } from "react";

const CardHeadless = ({
  defaultSelected = false,
  defaultExpanded = false,
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpand = useCallback(() => {
    setExpanded((v) => !v);
  }, []);

  const api = useMemo(
    () => ({
      hovered,
      selected,
      expanded,
      setSelected,
      setExpanded,
      toggleExpand,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onCardClick: () => setSelected((s) => !s),
    }),
    [hovered, selected, expanded, toggleExpand]
  );

  return children(api);
};

export default CardHeadless;
