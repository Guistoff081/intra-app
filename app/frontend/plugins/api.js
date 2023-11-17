class Api {
  constructor() {}
  call(request, e) {
    let has_animation = null;
    try {
      e.classList.add('loading');
      has_animation = true;
    } catch (e) {
      has_animation = false;
    }
    return new Promise((resolve) => {
      request.then((response) => {
        if (has_animation === true) {
          e.classList.remove('loading');
          let status = null;
          if (response === true) {
            status = 'success';
          }
          if (response === false) {
            status = 'failed';
          }

          e.classList.add(status);
          setTimeout(() => {
            e.classList.remove(status);
          }, 1000);
        }

        resolve(response);
      });
    });
  }
  install(app) {
    app.plugin = this;
    app.config.globalProperties.$api = this;
  }
}

export function createApi(args) {
  const relative_url_root = process.env.RAILS_RELATIVE_URL_ROOT;
  if (relative_url_root === '' || relative_url_root === undefined || relative_url_root === null) {
    args.handler.defaults.baseURL = `${window.location.protocol}/api/${args.namespace}/`;
  } else {
    args.handler.defaults.baseURL = `${window.location.protocol}/${relative_url_root}/api/${args.namespace}/`;
  }
  args.handler.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  args.handler.interceptors.response.use(
    (response) => response,
    (error) => {
      if (import.meta.env.MODE === 'production') {
        switch (error.response.status) {
          case 500:
            window.location.href = '/500';
            break;
          case 401:
            console.error('not authenticated');
            break;
        }
      }

      return Promise.reject(error);
    }
  );

  return new Api();
}
