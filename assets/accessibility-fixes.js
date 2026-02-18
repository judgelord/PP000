<script>
  // If you have multiple navbars (e.g., main + sidebar), label uniquely:
  const navbars = document.querySelectorAll('nav.navbar');
  navbars.forEach((nav, idx) => {
    nav.setAttribute('aria-label', idx === 0 ? 'Main site navigation' : `Secondary navigation`);
  });
  const sidebar = document.getElementById('quarto-sidebar');
  if (sidebar && sidebar.tagName === 'NAV') {
    sidebar.setAttribute('aria-label', 'Sidebar navigation');
  }
  // If your sidebar is a div with role="navigation"
  else if (sidebar && sidebar.getAttribute('role') === 'navigation') {
    sidebar.setAttribute('aria-label', 'Sidebar navigation');
  }
  // Add tabindex=0 to scrollable <pre> elements
  document.querySelectorAll('pre').forEach(function(pre) {
    if (pre.scrollWidth > pre.clientWidth) {
      pre.setAttribute('tabindex', '0');
      pre.setAttribute('aria-label', 'Code sample');
    }
  });
  document.querySelectorAll('.callout-header.collapsed').forEach(function(header) {
  if (!header.hasAttribute('role')) {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
  }});
</script>


