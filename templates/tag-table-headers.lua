function Table(tbl)
  return {
    pandoc.RawBlock("latex", "\\tagpdfsetup{table/header-rows={1}}"),
    tbl
  }
end
