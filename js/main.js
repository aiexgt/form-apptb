(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);

function departamentoTemplate() {
  let template = ``;
  for (let i of depMun) {
    console.log(i);
    template += `<option value="${i.title}">${i.title}</option>`;
  }
  return template;
}

$.post("./api/departamento.php", (data, status) => {
  $("#departamento").html(data);
});

$("#departamento").change(() => {
  const departamento = $("#departamento").val();
  if (departamento != 0) {
    $.post("./api/municipio.php", { departamento }, (data, status) => {
      $("#municipio").html(data).removeAttr("disabled");
    });
  }
});

$("#enviar").click((e) => {
  e.preventDefault();
  const nombre = $("#nombre").val();
  const nit = $("#nit").val();
  const departamento = $("#departamento").val();
  const municipio = $("#municipio").val();
  const direccion = $("#direccion").val();
  const correo = $("#correo").val();
  const telefono = $("#telefono").val();

  if (nombre == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre es requerido",
    });
  } else if (nit == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NIT es requerido",
    });
  } else if (departamento == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Departamento es requerido",
    });
  } else if (direccion == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Dirección es requerida",
    });
  } else if (correo == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre es requerido",
    });
  } else {
    $.post("./api/registro.php", {
      nombre,
      nit,
      departamento,
      municipio,
      direccion,
      correo,
      telefono
    }, (data, status)=>{
      $("#formulario")[0].reset();
      $("#formulario").html(`
      <span class="login100-form-title p-b-53">
      Gracias por participar.
      </span>`)
      Swal.fire(
        'Excelente!',
        'Has sido registrado para participar!',
        'success'
      )
    })
  }
});
